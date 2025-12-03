import React, { useState, useRef, type ChangeEvent } from 'react';
import Button from './Button';
import './App.css'; 

interface AnalysisResult {
  diagnosis: string;
  confidence: number;
  message: string;
}

const SkinAnalyzer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", selectedFile); 

    try {
      const response = await fetch('http://localhost:5000/api/skincheck', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error("Server communication error.");
      
      const data: AnalysisResult = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze image. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skin-container glass-panel">
      <h2>Dermatology analyzer AI</h2>
      
      <div className="medical-disclaimer">
        ⚠️ Important: This is not a medical service. This application is a technology demonstration only and may produce incorrect results. Please consult a doctor for any skin issues.
      </div>

      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <Button 
            text={selectedFile ? "Choose another image" : "Upload image"}
            onClick={() => fileInputRef.current?.click()}
        />

        {selectedFile && (
            <div className="file-name" style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
                {selectedFile.name}
            </div>
        )}
      </div>

      {previewUrl && (
        <div className="preview-section">
          <div className="image-container">
            <img src={previewUrl} alt="Preview" className="image-preview" />
          </div>

          <Button
            text={loading ? "Analyzing..." : "Start analysis"}
            onClick={handleAnalyze}
            disabled={loading}
            className="analyze-btn" 
          />
        </div>
      )}

      {error && <p className="error-text" style={{ color: 'var(--neon-red)' }}>{error}</p>}

      {result && (
        <div className="result-box">
          <div className="result-header" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>Diagnosis:</span>
            <span className="diagnosis-text" style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{result.diagnosis}</span>
          </div>
          
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${result.confidence}%` }}
            />
          </div>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Confidence: {result.confidence.toFixed(1)}% — Result: {result.diagnosis}
          </p>
        </div>
      )}
    </div>
  );
};

export default SkinAnalyzer;