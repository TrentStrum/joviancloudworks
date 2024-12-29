"use client"

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function FeatureEditor() {
  const [features, setFeatures] = useState([]);
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    const { data, error } = await supabase
      .from('features')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } else {
      setFeatures(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('features')
      .insert({
        title: formData.get('title'),
        description: formData.get('description'),
        image_url: formData.get('image_url'),
        tags: formData.get('tags')?.toString().split(',').map(tag => tag.trim()),
        demo_url: formData.get('demo_url'),
      });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } else {
      toast({
        title: "Success",
        description: "Feature created successfully",
      });
      loadFeatures();
      e.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Feature</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="title" placeholder="Feature Title" required />
          <Input name="image_url" placeholder="Image URL" required />
          <Textarea name="description" placeholder="Feature Description" required />
          <Input name="tags" placeholder="Tags (comma-separated)" required />
          <Input name="demo_url" placeholder="Demo URL" required />
          <Button type="submit">Create Feature</Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Existing Features</h2>
        {features.map((feature: any) => (
          <Card key={feature.id} className="p-4">
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
            <div className="text-sm mt-2">
              Tags: {feature.tags.join(', ')}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}