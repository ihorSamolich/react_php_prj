export default function Footer() {
  return (
    <footer className="flex mt-3 flex-col items-center justify-center border-t border-gray-200 px-16 py-6 font-light lg:flex-row">
      <p className="mb-6 text-gray-700 lg:mb-0">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="#" className="text-light-blue-500 hover:text-light-blue-700 text-center">
          Creative Tim
        </a>
      </p>
    </footer>
  );
}
