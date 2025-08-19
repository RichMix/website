import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type QuoteRequest, type InsertQuoteRequest, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private quoteRequests: Map<string, QuoteRequest>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.quoteRequests = new Map();
    this.blogPosts = new Map();
    
    // Seed some blog posts
    this.seedBlogPosts();
  }

  private seedBlogPosts() {
    const posts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "How to Plan Security for High School Games",
        slug: "security-planning-high-school-games",
        excerpt: "Essential guidelines for ensuring safe and enjoyable high school sporting events.",
        content: "Planning security for high school games requires careful consideration of crowd size, venue layout, and emergency procedures...",
        category: "Event Safety Tips",
        imageUrl: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-08-15'),
        createdAt: new Date('2024-08-15'),
      },
      {
        id: randomUUID(),
        title: "Liability Prevention Tips for Event Organizers",
        slug: "liability-prevention-event-organizers",
        excerpt: "Key strategies to minimize liability risks at community events and gatherings.",
        content: "Event organizers face numerous liability challenges. Here are essential tips to protect your organization...",
        category: "Compliance & Law",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-08-10'),
        createdAt: new Date('2024-08-10'),
      },
      {
        id: randomUUID(),
        title: "Community Safety Success: Summer Festival Recap",
        slug: "summer-festival-safety-recap",
        excerpt: "How our security team helped make this year's summer festival the safest yet.",
        content: "The annual Central Coast Summer Festival welcomed over 8,000 attendees this year...",
        category: "Community News",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date('2024-08-05'),
        createdAt: new Date('2024-08-05'),
      },
    ];

    posts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quoteRequest: QuoteRequest = {
      ...request,
      id,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
    );
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = {
      ...post,
      id,
      createdAt: new Date(),
      publishedAt: post.publishedAt || new Date(),
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

export const storage = new MemStorage();
