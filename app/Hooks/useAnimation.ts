const useAnimation = (status : boolean) => {
    let isAnimating = status;
    const setIsAnimating = (value: boolean) => {
        // This function can be used to update the animation status
        // For example, you might want to trigger an animation when the status changes
        if (value !== isAnimating) {
            // Trigger your animation logic here
            console.log(`Animation status changed to: ${value}`);
        }
        isAnimating = value;
    }
    
    return [isAnimating, setIsAnimating] as const;
};

export default useAnimation;