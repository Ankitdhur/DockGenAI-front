"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ResultCard from "./ResultCard";
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Card } from "@/components/ui/card";
import { apiService, GenerationStatus } from "@/lib/api";

export default function DockGenForm() {
  const [repoUrl, setRepoUrl] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [generationId, setGenerationId] = useState<string | null>(null);
  const [generationStatus, setGenerationStatus] = useState<GenerationStatus | null>(null);
  const [polling, setPolling] = useState(false);

  const handleGenerate = async () => {
    if (!repoUrl || !token) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    toast("Starting Dockerfile generation...");
    
    try {
      const response = await apiService.generateDockerfile({
        githubUrl: repoUrl,
        githubToken: token
      });

      if (response.error) {
        toast.error(response.error);
      } else {
        setGenerationId(response.generationId);
        setPolling(true);
        toast.success("Generation started! Checking status...");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Poll for generation status
  useEffect(() => {
    if (!generationId || !polling) return;

    const pollStatus = async () => {
      try {
        const status = await apiService.getGenerationStatus(generationId);
        setGenerationStatus(status);

        if (status.generation.buildStatus === 'success') {
          setPolling(false);
          toast.success("Dockerfile generated and image built successfully!");
        } else if (status.generation.buildStatus === 'error') {
          setPolling(false);
          toast.error(`Generation failed: ${status.generation.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error polling status:', error);
      }
    };

    const interval = setInterval(pollStatus, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
  }, [generationId, polling]);

  return (
    <section id="demo" className="flex justify-center mt-16">
      <Card className="max-w-3xl w-full mx-6 p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
          Enter Repository Details
        </h3>

        <div className="space-y-4">
          <Input
            placeholder="GitHub Repository URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
          <Input
            type="password"
            placeholder="GitHub Personal Access Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-indigo-500 via-cyan-500 to-pink-500 hover:opacity-90 transition-all shadow-lg shadow-indigo-500/30"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate & Build Image"
            )}
          </Button>
        </div>

        {generationStatus && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              {generationStatus.generation.buildStatus === 'success' && (
                <CheckCircle className="h-5 w-5 text-green-400" />
              )}
              {generationStatus.generation.buildStatus === 'error' && (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
              {(generationStatus.generation.buildStatus === 'pending' || 
                generationStatus.generation.buildStatus === 'building') && (
                <Clock className="h-5 w-5 text-yellow-400 animate-spin" />
              )}
              <span className="text-sm text-gray-300">
                Status: {generationStatus.generation.buildStatus}
              </span>
            </div>

            {generationStatus.generation.techStack && (
              <div className="text-sm text-gray-300">
                <strong>Detected Tech Stack:</strong> {generationStatus.generation.techStack.join(', ')}
              </div>
            )}

            {generationStatus.generation.dockerfile && (
              <ResultCard
                dockerfile={generationStatus.generation.dockerfile}
                imageTag={generationStatus.generation.imageId || 'generated-image'}
                generationId={generationStatus.generation.id}
              />
            )}

            {generationStatus.generation.error && (
              <div className="text-red-400 text-sm">
                <strong>Error:</strong> {generationStatus.generation.error}
              </div>
            )}
          </div>
        )}

        <Toaster position="bottom-center" richColors />
      </Card>
    </section>
  );
}
