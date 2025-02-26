
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Create timeline for product animation
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".product-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            markers: false // Set to true for debugging
        }
        });
        
        // Content timelines
        const contentTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".product-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
        });
        
        // Animation phases for product
        tl.fromTo("#product", 
        { 
            left: "10%",
            top: "10%",
            rotation: 0,
            scale: 1
        },
        { 
            left: "43%",
            top: "60%",
            xPercent: -50,
            yPercent: -50,
            scale: 1.1,
            duration: 1
        }
        )
        .to("#product", {
        rotation: 360,
        duration: 1
        })
        .to("#product", {
        right: "10%",
        top: "40%",
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 1
        });
        
        // Animation for content phases
        contentTl
        .to("#phase1", { opacity: 1, duration: 0.5 })
        .to("#phase1", { opacity: 0, duration: 0.5 }, 1.5)
        .to("#phase2", { opacity: 1, duration: 0.5 }, 2)
        .to("#phase2", { opacity: 0, duration: 0.5 }, 3.5)
        .to("#phase3", { opacity: 1, duration: 0.5 }, 4);

        contentTl.timeScale(2); // Doubles the speed of all animations
