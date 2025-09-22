export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8 shadow-inner">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
}
