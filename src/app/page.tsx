import { Button } from "@/components/ui/button"
import {
  ShoppingCart,
  Menu,
  Download,
  MessageCircle,
  Shield,
  Search,
  Users,
  Calendar,
  CheckCircle,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center border-b border-purple-100/50 backdrop-blur-sm bg-white/80">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ShopSage
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="#blockchain"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Blockchain
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6">
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Download</span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-8">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-green-400 rounded-full"></div>
              <span>Powered by Solana Blockchain</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Smart Shopping
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Consultation
                </span>
                <span className="block text-gray-900">Made Simple</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
                Get personalized shopping advice powered by AI and secured by Solana blockchain. Make smarter purchases
                with expert consultation at your fingertips.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">AI Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Blockchain Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Search className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Smart Search</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                <div className="flex items-center mr-2">
                  <Download className="w-5 h-5 mr-1" />
                  <div className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-white">A</span>
                  </div>
                </div>
                Download for Android
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg bg-transparent"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-1 text-purple-600" />
                  Q2
                </div>
                <div className="text-sm text-gray-600">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-1 text-blue-600" />
                  500+
                </div>
                <div className="text-sm text-gray-600">Beta Signups</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-1 text-green-600" />
                  90%
                </div>
                <div className="text-sm text-gray-600">Development</div>
              </div>
            </div>
          </div>

          {/* Right Column - App Screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium text-gray-800">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 h-full bg-gradient-to-b from-purple-50 to-white">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                          <ShoppingCart className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900">ShopSage</h2>
                          <p className="text-xs text-gray-600">Smart Shopping Assistant</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white rounded-xl p-3 mb-6 shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Search className="w-4 h-4" />
                        <span className="text-sm">What are you shopping for?</span>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Popular Categories</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg mb-2"></div>
                          <span className="text-sm font-medium text-gray-900">Electronics</span>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="w-8 h-8 bg-green-100 rounded-lg mb-2"></div>
                          <span className="text-sm font-medium text-gray-900">Fashion</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Consultations */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Recent Consultations</h3>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">Laptop Purchase</p>
                              <p className="text-xs text-gray-600">AI Recommendation</p>
                            </div>
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">Smart Watch</p>
                              <p className="text-xs text-gray-600">Expert Consultation</p>
                            </div>
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-green-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-lg">S</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
