import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { DynamicBackground } from "@/components/dynamic-background";
import { CalendarDays, Stethoscope, UserRound, TestTube } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <DynamicBackground />
      <div className="relative z-10">
        <header className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Niraamay
            </h1>
            <nav className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-4">
              Your Path to Wellness Starts Here
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-8">
              Niraamay: Seamless Healthcare at Your Fingertips
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Explore Our Services
            </Button>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                  <CalendarDays className="mr-2" />
                  Doctor Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-300 mb-4">
                  Schedule appointments with top-rated doctors across hospitals.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                  <Stethoscope className="mr-2" />
                  Online Consultations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-300 mb-4">
                  Connect with healthcare professionals from the comfort of your
                  home.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  Start Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                  <UserRound className="mr-2" />
                  Nurses & Caretakers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-300 mb-4">
                  Find skilled nurses and compassionate caretakers for
                  personalized care.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  Find Caregivers
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700 dark:text-blue-400">
                  <TestTube className="mr-2" />
                  Lab Tests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-300 mb-4">
                  Book essential lab tests at accredited facilities near you.
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  Schedule Test
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">
              Why Choose Niraamay?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  Trusted Expertise
                </h4>
                <p className="text-blue-600 dark:text-blue-300">
                  Access to a network of verified and experienced healthcare
                  professionals.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  Seamless Experience
                </h4>
                <p className="text-blue-600 dark:text-blue-300">
                  User-friendly platform for effortless booking and
                  consultations.
                </p>
              </div>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  Holistic Care
                </h4>
                <p className="text-blue-600 dark:text-blue-300">
                  Comprehensive healthcare solutions tailored to your unique
                  needs.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-blue-600/80 dark:bg-blue-800/80 backdrop-blur-md text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Niraamay
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:underline">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/doctors" className="hover:underline">
                      Find a Doctor
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">
                  Contact Information
                </h5>
                <p>456 Wellness Avenue, Health City</p>
                <p>Phone: (987) 654-3210</p>
                <p>Email: care@niraamay.com</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-200">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-blue-200">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-blue-200">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-blue-200">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2023 Niraamay Healthcare. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
