interface ErrorAlertProps {
  message?: string;
  className?: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({
  message = 'خطایی رخ داده است',
  className,
}) => (
  <div
    className={`bg-red-100 text-red-700 p-4 rounded-lg text-center ${
      className || ''
    }`}
    role='alert'
    tabIndex={0}
    aria-live='polite'
  >
    {message}
  </div>
);

export default ErrorAlert;
