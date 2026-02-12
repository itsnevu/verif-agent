'use client';

import React from 'react';

type Props = {
    children: React.ReactNode;
    fallbackTitle?: string;
};

type State = {
    hasError: boolean;
};

export default class AppErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: unknown) {
        console.error('AppErrorBoundary caught:', error);
    }

    handleReset = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <section className="py-20 px-6">
                    <div className="max-w-xl mx-auto rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
                        <h3 className="text-xl font-bold text-red-700 mb-2">{this.props.fallbackTitle || 'Module Error'}</h3>
                        <p className="text-sm text-red-600 mb-4">A runtime error occurred in this section. Please retry.</p>
                        <button
                            onClick={this.handleReset}
                            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
                        >
                            Retry Section
                        </button>
                    </div>
                </section>
            );
        }

        return this.props.children;
    }
}
