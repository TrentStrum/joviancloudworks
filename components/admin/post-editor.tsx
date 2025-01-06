"use client"

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/helpers/use-toast';
import { useBlogPosts, useCreateBlogPost, useUpdateBlogPost, useDeleteBlogPost } from '@/hooks/react-query/use-blog';
import type { BlogPost, BlogPostFormData } from '@/types/blog.types';
import { AdminPostViewer } from '@/components/admin/admin-post-viewer';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Star, Eye } from 'lucide-react';
import { PreviewModal } from './preview-modal';


export function PostEditor(): JSX.Element {
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { toast } = useToast();
  const { data, isLoading } = useBlogPosts({ sortBy: 'created_at' });

  const createPostMutation = useCreateBlogPost();
  const updatePostMutation = useUpdateBlogPost(editingPost?.id?.toString() ?? '');
  const deletePostMutation = useDeleteBlogPost();

  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postData: BlogPostFormData = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      image_url: formData.get('image_url') as string || '/Jupiter.png',
      featured: formData.get('featured') === 'on',
    };

    try {
      if (editingPost?.id) {
        await updatePostMutation.mutateAsync(postData);
      } else {
        await createPostMutation.mutateAsync(postData);
      }

      toast({
        variant: "success",
        title: "Success",
        description: `Post ${editingPost ? 'updated' : 'created'} successfully`,
      });

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

  const handleDelete = async (id: string): Promise<void> => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await deletePostMutation.mutateAsync(id);
      toast({
        variant: "success",
        title: "Success",
        description: "Post deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete post",
      });
    }
  };

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>): void => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    setFormData({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      image_url: formData.get('image_url') as string || '/Jupiter.png',
      featured: formData.get('featured') === 'on',
    });
  };

  if (isLoading) return <div>Loading...</div>;

  const blogPosts = data?.pages.flat() ?? [];
  const formattedPosts = blogPosts.map(post => ({
    id: post.id,
    description: post.content,
    titleText: post.title,
    title: (
      <div className="flex items-center gap-2">
        {post.featured && (
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        )}
        <span>{post.title}</span>
      </div>
    ),
    src: post.image_url || '/Jupiter.png',
    ctaText: 'View Details',
    ctaLink: '#',
    content: () => (
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setEditingPost(post);
          }}
        >
          Edit
        </Button>
        <Button 
          variant="destructive" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            post.id && handleDelete(post.id.toString());
          }}
          disabled={deletePostMutation.isPending}
        >
          Delete
        </Button>
      </div>
    ),
  }));

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {editingPost ? 'Edit Post' : 'Create New Post'}
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPreview(true)}
            disabled={!formData.title && !formData.content}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
        <form 
          onSubmit={handleSubmit} 
          onChange={handleFormChange}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input 
              id="title"
              name="title" 
              placeholder="Post Title" 
              defaultValue={editingPost?.title} 
              required 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image_url" className="text-sm font-medium">
              Image URL
            </label>
            <Input 
              id="image_url"
              name="image_url" 
              placeholder="Image URL" 
              defaultValue={editingPost?.image_url || '/Jupiter.png'} 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Textarea 
              id="content"
              name="content" 
              placeholder="Post Content" 
              defaultValue={editingPost?.content} 
              required 
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              name="featured"
              defaultChecked={editingPost?.featured}
              className="border border-input dark:border-neutral-700 data-[state=unchecked]:bg-transparent [&>span]:bg-muted"
            />
            <Label htmlFor="featured">Featured Post</Label>
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit"
              disabled={createPostMutation.isPending || updatePostMutation.isPending}
            >
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

      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        post={formData}
      />

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Existing Posts</h2>
        <AdminPostViewer 
          posts={formattedPosts} 
          onEdit={setEditingPost} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
}