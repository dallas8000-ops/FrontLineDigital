import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production you'd send this to Sentry / LogRocket etc.
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 text-center">
          <p className="text-5xl mb-4">⚠️</p>
          <h2 className="text-2xl font-bold text-dark-900 mb-2">Something went wrong</h2>
          <p className="text-dark-500 mb-6 max-w-md">
            An unexpected error occurred. Try refreshing the page, or click below to recover.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <pre className="text-xs text-red-600 bg-red-50 rounded-lg p-4 mb-6 text-left max-w-xl overflow-auto">
              {this.state.error.message}
            </pre>
          )}
          <div className="flex gap-4">
            <button onClick={this.handleReset} className="btn btn-primary">
              Try Again
            </button>
            <button onClick={() => window.location.reload()} className="btn btn-outline">
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
