import * as React from "react";

interface IconCloudProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function IconCloud({ className = "", ...rest }: IconCloudProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      aria-hidden="true"
      {...rest}
    >
      <g>
        <g>
          <path
            d="M344.355,143.77c-89.868-88-242.103-39.712-264.598,83.945C34.71,234.249,0,273.123,0,319.952
          c0,51.393,41.811,93.204,93.204,93.204h282.311c75.258,0,136.484-61.226,136.484-136.483
          C512,189.244,430.284,123.682,344.355,143.77z"
          />
        </g>
      </g>
    </svg>
  );
}
