//Khi có lỗi hay bảo trì cần có trang này

import React, { Component } from 'react'

interface State {
    hasError: boolean;
}
interface Props {
    children: React.ReactNode;
}
export default class ErrorBoudary extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    //Dc thực thi khi các compoent throw ra JS error
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>ErrorBoudary</div>
            )
        }
        return this.props.children;

    }
}