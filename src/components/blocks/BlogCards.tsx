"use client";

import Image from "next/image";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "./FadeIn";

interface BlogPost {
  category: string;
  title: string;
  href: string;
  imageSrc: string;
}

interface BlogCardsProps {
  posts: BlogPost[];
}

export function BlogCards({ posts }: BlogCardsProps) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="grid-container">
        <p className="micro text-cobalt mb-8 text-center">Recommended for you</p>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <Link href={post.href} className="group block h-full">
                <div className="rounded-xl overflow-hidden mb-4 border border-mist/30 bg-white shadow-card group-hover:shadow-elevated transition-all duration-300">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    width={1200}
                    height={675}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="micro text-cobalt mb-2">{post.category}</p>
                <h3 className="text-sm font-medium text-inkwell group-hover:text-cobalt transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
