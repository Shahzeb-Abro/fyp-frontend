export const About = () => {
  return (
    <section className="max-w-[980px] mx-auto px-4 lg:px-0 py-10 md:py-24 flex flex-col gap-16 lg:gap-20">
      <div className="flex items-start gap-4 flex-col md:flex-row">
        <h2 className="flex-1 text-2xl md:text-3xl font-semibold text-primary-text">
          Who we are?
        </h2>
        <p className="flex-1 text-secondary-text text-lg">
          At Radyab - Zakham, our mission is to revolutionize the way diabetic
          foot ulcers (DFUs) are detected and managed. Diabetic foot ulcers are
          a serious complication of diabetes, often leading to severe outcomes
          such as amputations if not detected and treated early. Our platform
          leverages cutting-edge artificial intelligence and computer vision to
          provide fast, accurate, and accessible foot ulcer detection,
          empowering individuals to take control of their health.
        </p>
      </div>

      <div className="flex items-start gap-4 flex-col md:flex-row-reverse">
        <h2 className="flex-1 text-2xl md:text-3xl font-semibold text-primary-text">
          What is our vision?
        </h2>
        <p className="flex-1 text-secondary-text text-lg">
          Our vision is to create a world where diabetic foot ulcers are
          detected at the earliest stages, reducing the risk of infection,
          complications, and unnecessary healthcare costs. By harnessing the
          power of AI, we aim to make foot ulcer detection as simple as taking a
          photo, enabling users from all walks of life, especially in
          underserved areas, to access the care they need. We are committed to
          bridging the gap between technology and healthcare, offering a
          solution that is easy to use, secure, and impactful.
        </p>
      </div>

      <div className="flex items-start gap-4 flex-col md:flex-row">
        <h2 className="flex-1 text-2xl md:text-3xl font-semibold text-primary-text">
          What is our mission?
        </h2>
        <p className="flex-1 text-secondary-text text-lg">
          With the ability to upload foot images for real-time analysis, our
          system detects potential foot ulcers with high accuracy, providing
          instant results and recommending timely medical consultation. With
          bilingual support in both English and Urdu, we ensure that our
          services are accessible to a wide demographic, particularly in regions
          like Pakistan.Radyab - Zakham is more than just a foot ulcer detection
          tool; it's a step toward empowering patients, improving healthcare
          outcomes, and contributing to a healthier, safer future for all.
        </p>
      </div>
    </section>
  );
};
