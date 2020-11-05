import React, { Component } from 'react'
import ErrorFallback from "./ErrorFallback";
export class ErrorBoundary extends Component {
    state = { hasError: false, error: 'null' };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    resetErrorBoundary() {
        this.setState(prevState => ({
            hasError: !prevState.hasError,
            error: 'null',
        }));
    }
    render() {
        if (this.state.hasError) {
            return <div><ErrorFallback error={this.state} resetErrorBoundary={this.resetErrorBoundary.bind(this)} /></div>
        }
        return this.props.children
    }
}

