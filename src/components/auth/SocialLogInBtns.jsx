export default function SocialLogInBtns() {
  return (
    <div className="flex items-center justify-between">
      <span className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500">
        Google
      </span>
      <span className="bg-richBlack text-white px-4 py-2 rounded-lg hover:bg-charcoal">
        Apple
      </span>
      <span className="bg-blue-500 px-4 text-white py-2 rounded-lg hover:bg-blue-600">
        Facebook
      </span>
    </div>
  );
}
