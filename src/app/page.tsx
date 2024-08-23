'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function Component() {
 

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Tasty Bites</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
          <span className="ml-2 text-xl font-bold">Tasty Bites</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#menu">
            Menu
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Tasty Bites
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our delicious main dishes and experience culinary excellence.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#menu">
                  <Button>View Menu</Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
                <p className="text-muted-foreground">
                  Tasty Bites was founded in 2010 with a passion for creating delicious, high-quality meals using the
                  freshest ingredients. Our team of experienced chefs combines traditional cooking techniques with
                  modern culinary innovations to bring you a unique dining experience.
                </p>
                <p className="text-muted-foreground">
                  We're committed to sourcing our ingredients from local farmers and suppliers, ensuring that every
                  dish not only tastes amazing but also supports our community. At Tasty Bites, we believe that great
                  food brings people together, and we're dedicated to making every meal a memorable one.
                </p>
              </div>
              <img
                alt="Tasty Bites kitchen with chefs preparing food"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Our Main Dishes</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Grilled Salmon with lemon and herbs"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    height="200"
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Grilled Salmon</h3>
                  <p className="text-muted-foreground">Fresh Atlantic salmon grilled to perfection with lemon and herbs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Vegetarian Pasta with seasonal vegetables and pesto sauce"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    height="200"
                    src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhcmlhbiUyMHBhc3RhfGVufDB8fDB8fHww"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Vegetarian Pasta</h3>
                  <p className="text-muted-foreground">Homemade pasta tossed with seasonal vegetables and pesto sauce.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Juicy Beef Steak with roasted vegetables"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    height="200"
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMHN0ZWFrfGVufDB8fDB8fHww"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Beef Steak</h3>
                  <p className="text-muted-foreground">Juicy ribeye steak cooked to your liking, served with roasted vegetables.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Us</h2>
            <div className="mx-auto max-w-lg">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" required />
                </div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Tasty Bites. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}