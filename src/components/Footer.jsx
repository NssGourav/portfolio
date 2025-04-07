const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Gourav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 