"use client"

import { useState, useEffect } from 'react';

interface ABTestConfig {
  testId: string;
  variants: ['A', 'B'];
}

interface ABTestMetrics {
  impressions: number;
  clicks: number;
  closes: number;
}

export function useABTesting(config: ABTestConfig) {
  const [variant, setVariant] = useState<'A' | 'B'>();
  const [metrics, setMetrics] = useState<ABTestMetrics>({
    impressions: 0,
    clicks: 0,
    closes: 0,
  });

  useEffect(() => {
    // Consistently assign variant based on user
    const storedVariant = localStorage.getItem(`ab-test-${config.testId}`);
    if (storedVariant && (storedVariant === 'A' || storedVariant === 'B')) {
      setVariant(storedVariant);
    } else {
      const newVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem(`ab-test-${config.testId}`, newVariant);
      setVariant(newVariant);
    }
  }, [config.testId]);

  const trackMetric = (type: keyof ABTestMetrics) => {
    setMetrics(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));

    // In a real app, send to analytics service
    console.log(`Tracked ${type} for variant ${variant}`);
  };

  const getConversionRate = () => ({
    clickThrough: metrics.clicks / metrics.impressions || 0,
    closeRate: metrics.closes / metrics.impressions || 0,
  });

  return {
    variant,
    metrics,
    trackMetric,
    getConversionRate,
  };
}