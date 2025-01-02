"use client"

import { useState, useEffect, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface Post {
  id?: number;
  title: string;
  content: string;
  image_url?: string;
}

export function PostEditor({ postId }: { postId?: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const { toast } = useToast();

  const loadPosts = useCallback(async () => {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load posts",
      });
    }
  }, [toast]);

  const loadSinglePost = useCallback(async (id: string) => {
    try {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      const data = await response.json();
      setEditingPost(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load post",
      });
    }
  }, [toast]);

  useEffect(() => {
    loadPosts();
    if (postId) {
      loadSinglePost(postId);
    }
  }, [postId, loadPosts, loadSinglePost]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postData = {
      title: formData.get('title'),
      content: formData.get('content'),
      image_url: formData.get('image_url') || '/placeholder.jpg',
    };

    try {
      const url = editingPost 
        ? `/api/posts/${editingPost.id}`
        : '/api/posts';
      
      const response = await fetch(url, {
        method: editingPost ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to save post');

      toast({
        variant: "success",
        title: "Success",
        description: editingPost 
          ? "Post updated successfully"
          : "Post created successfully",
      });

      await loadPosts();
      (e.target as HTMLFormElement).reset();
      setEditingPost(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save post",
      });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete post');

      toast({
        variant: "success",
        title: "Success",
        description: "Post deleted successfully",
      });

      loadPosts();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete post",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingPost ? 'Edit Post' : 'Create New Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            name="title" 
            placeholder="Post Title" 
            defaultValue={editingPost?.title} 
            required 
          />
          <Input 
            name="image_url" 
            placeholder="Image URL" 
            defaultValue={editingPost?.image_url || ''} 
          />
          <Textarea 
            name="content" 
            placeholder="Post Content" 
            defaultValue={editingPost?.content} 
            required 
          />
          <div className="flex gap-2">
            <Button type="submit">
              {editingPost ? 'Update Post' : 'Create Post'}
            </Button>
            {editingPost && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setEditingPost(null)}
              >
                Cancel Edit
              </Button>
            )}
          </div>
        </form>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Existing Posts</h2>
        {posts.map((post) => (
          <Card key={post.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.content}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setEditingPost(post)}
                >
                  Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => post.id && handleDelete(post.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}