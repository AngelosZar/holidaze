import Layout from '../components/layout/Layout';
function ContactUsPage() {
  return (
    <Layout>
      <div className="container mx-auto p-6 md:p-8 lg:p-12 min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Contact Us
          </h2>

          <p className="text-lg md:text-lg text-gray-700 leading-relaxed mb-6">
            Have questions, feedback, or need assistance? We're here to help!
            Reach out to us through the following channels:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-gray-800">
              <svg
                className="h-6 w-6 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:support@holidaze.com"
                className="text-lg hover:underline text-blue-600"
              >
                support@holidaze.com
              </a>
            </div>

            <div className="flex items-center justify-center text-gray-800">
              <svg
                className="h-6 w-6 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-lg">+47 123-45678</p>
            </div>

            <div className="flex items-center justify-center text-gray-800">
              <svg
                className="h-6 w-6 text-blue-600 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-lg">123 Storgata, Oslo, 0180</p>
            </div>
          </div>

          <p className="text-md text-gray-600">
            We look forward to hearing from you!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
