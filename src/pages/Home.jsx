import React from "react";
import { CarouselDefault } from "../components/Carousel";

function Home() {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-4">
      {/* Carousel Section */}
      <div className="w-full mb-8">
        <CarouselDefault />
      </div>

      {/* Information Section */}
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        {/* Church Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-right">
          كنيسة الشهيدة دميانة والأنبا ابرام
        </h2>

        {/* Address */}
        <div className="mb-4 text-right">
          <h3 className="text-xl font-semibold text-gray-700">عنوان</h3>
          <p className="text-gray-600">
            المعصرة المحطة، المعصرة، محافظة القاهرة
          </p>
          {/* Embedded Google Map */}
          <div className="mt-4 w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.46474958296!2d31.297117500000002!3d29.908519799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837a3531f9bf7%3A0x32baad003346eda6!2sChurch%20of%20the%20Chaste%20Martyr%20Demiana%20and%20Anba%20Abraam%20-%20El%20Maasara%20El%20Mahatta!5e0!3m2!1sen!2seg!4v1736987892784!5m2!1sen!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            />
          </div>
        </div>

        {/* Activities */}
        <div className="mb-4 text-right">
          <h3 className="text-xl font-semibold text-gray-700">أنشطة</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>خدمة كشفية مسيحية</li>
            <li>مدارس احد</li>
            <li>كورال كنسي</li>
            <li>خدمة شباب</li>
            <li>خدمة احتياجات</li>
            <li>خدمة شباب</li>
          </ul>
        </div>

        {/* Facebook Link */}
        <div className="text-right">
          <h3 className="text-xl font-semibold text-gray-700">تابعنا</h3>
          <a
  href="https://www.facebook.com/pages/%D9%83%D9%86%D9%8A%D8%B3%D8%A9-%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF%D8%A9-%D8%AF%D9%85%D9%8A%D8%A7%D9%86%D8%A9-%D9%88%D8%A7%D9%84%D8%A7%D9%86%D8%A8%D8%A7-%D8%A5%D8%A8%D8%B1%D8%A7%D9%85-%D8%A8%D8%A7%D9%84%D9%85%D8%B9%D8%B5%D8%B1%D8%A9/136779430459413e"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 transition-colors underline hover:no-underline"
>
  Facebook
</a>
        </div>
      </div>
    </div>
  );
}

export default Home;