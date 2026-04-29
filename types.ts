import React from 'react';

export interface AuditFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PainPoint {
  text: string;
}

export interface Step {
  title: string;
  description: string;
  stepNumber: string;
}

export interface RoiCalculationRequest {
  hoursPerWeek: number;
  hourlyRate: number;
}

export interface RoiCalculationResponse {
  analysis: string;
  monthlyLoss: number;
  yearlyLoss: number;
}