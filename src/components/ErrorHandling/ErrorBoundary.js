import React, { Component } from 'react'
import ErrorFallback from "./ErrorFallback";
export class ErrorBoundary extends Component {
    state = { hasError: false, error: 'null' };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return <><ErrorFallback /></>
        }
        return this.props.children
    }
}

