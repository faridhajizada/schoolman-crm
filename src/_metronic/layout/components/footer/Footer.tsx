const Footer = () => {
  return (
    <>
      <div className="text-gray-900 order-2 order-md-1">
        <span className="text-muted fw-semibold me-1">
          {new Date().getFullYear().toString()}&copy;
        </span>
        <a
          href="#"
          target="_blank"
          className="text-gray-800 text-hover-primary"
        >
          Schoolman
        </a>
      </div>
    </>
  );
};

export { Footer };
