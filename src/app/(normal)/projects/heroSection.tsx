function HeroSection() {
  return (
    <div className="  w-full">
      <div className="max-w-5xl p-4 mx-auto flex flex-col gap-4 md:gap-6 items-center justify-center h-96">
        <p className=" border-b-2 border-primary-blue">Our Projects</p>
        <p className=" text-3xl md:text-5xl font-semibold text-center">
          Building the Future with Excellence
        </p>
        <p className=" text-sm md:text-lg text-gray-700 text-center">
          At SBN INFRA, we take pride in delivering high-quality industrial,
          commercial, and urban projects that shape Indias infrastructure. With
          over 20 years of experience, we have successfully completed numerous
          projects, ensuring precision, durability, and innovation.
        </p>
      </div>
      <img
        className=" w-full h-96 object-cover"
        src="/construction-bg.jpg"
        alt=""
      />
    </div>
  );
}

export default HeroSection;
