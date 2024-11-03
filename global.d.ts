export { };

declare global {
  interface Window {
    feedbackConfig: {
      themeColor: string;
      placeholderText: {
        name: string;
        email: string;
        feedback: string;
      };
    };
    cookieConfig?: {
      themeColor?: string;
      message?: string;
    };
  }
}
