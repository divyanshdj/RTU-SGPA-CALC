import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="mt-2 w-full bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Brand & Copyright */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-sm text-gray-500 mt-1">
                        © {new Date().getFullYear()} | Created by{' '}
                        <a
                            href="https://github.com/divyanshdj"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Divyansh Jain
                        </a>
                    </span>
                </div>
                {/* Right: Social Icons */}
                <div className="flex gap-5">
                    <a
                        href="https://github.com/divyanshdj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/divyansh-jain-29712726b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                        href="https://twitter.com/divyansh_dj3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaXTwitter className="text-2xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;