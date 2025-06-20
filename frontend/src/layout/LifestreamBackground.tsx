const LifestreamBackground = () => {
	return (
		<div
			className='
        fixed inset-0
        bg-[repeating-radial-gradient(circle_at_center,_rgba(0,255,100,0.1),_transparent_20px)]
        bg-[length:400%_400%]
        animate-lifestream
        filter blur-md
        mix-blend-screen
        pointer-events-none
        -z-10
      '
		/>
	);
};

export default LifestreamBackground;
