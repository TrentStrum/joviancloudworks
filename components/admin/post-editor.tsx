"use client"

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function PostEditor() {
  const [posts, setPosts] = useState([]);
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } else {
      setPosts(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase
      .from('posts')
      .insert({
        title: formData.get('title'),
        content: formData.get('content'),
        image_url: formData.get('image_url'),
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
        description: "Post created successfully",
      });
      loadPosts();
      e.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="title" placeholder="Post Title" required />
          <Input name="image_url" placeholder="Image URL" required />
          <Textarea name="content" placeholder="Post Content" required />
          <Button type="submit">Create Post</Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Existing Posts</h2>
        {posts.map((post: any) => (
          <Card key={post.id} className="p-4">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}