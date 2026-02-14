'use server';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Timer, BarChart3, Calendar, CheckCircle2 } from 'lucide-react';

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold">
              L
            </div>
            <span className="text-lg font-semibold text-foreground">
              Lifestack
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                  Your personal life operating system
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Track time, organize thoughts, set goals, and manage your day
                  in one unified dashboard. Designed for focus and clarity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Free
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Free forever plan available
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    No credit card required
                  </span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4 opacity-20">📊</div>
                    <p className="text-muted-foreground">Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-secondary/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Everything you need to stay organized
            </h2>
            <p className="text-lg text-muted-foreground">
              A unified workspace for time tracking, notes, goals, and calendar
              management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Timer,
                title: 'Time Tracking',
                description:
                  'Intuitive timer for tracking your work sessions and stay aware of how you spend your time.',
              },
              {
                icon: Calendar,
                title: 'Calendar View',
                description:
                  'Visualize your schedule and time entries in an elegant calendar format for better planning.',
              },
              {
                icon: BarChart3,
                title: 'Analytics',
                description:
                  'Get insights into your productivity patterns with detailed reports and visualizations.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-card border border-border/60 hover:border-accent/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Start organizing your life today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of users building their personal productivity
              system with Lifestack.
            </p>
            <Link href="/signup">
              <Button size="lg">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
                L
              </div>
              <span className="font-semibold text-foreground">Lifestack</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Lifestack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
