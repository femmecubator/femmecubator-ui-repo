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

    render() {
        if (this.state.hasError) {
            return <><ErrorFallback /></>
        }
        return this.props.children
    }
}

