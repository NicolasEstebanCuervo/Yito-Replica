import * as Color from "../../../styles/colors";

export const InfinityIcon = ({
    color = Color.BluePurple,
}: {
    color?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        viewBox="0 0 27 26"
        fill="none"
    >
        <g clipPath="url(#clip0_428_37120)">
            <path
                d="M7 6.5C3.42324 6.5 0.5 9.42324 0.5 13C0.5 16.5768 3.42324 19.5 7 19.5C9.10167 19.5 10.9647 18.5038 12.1564 16.9546C11.6797 16.2721 11.2578 15.5776 10.8678 14.9276C10.1745 16.3576 8.70083 17.3333 7 17.3333C4.59459 17.3333 2.66667 15.4054 2.66667 13C2.66667 10.5946 4.59459 8.66667 7 8.66667C8.32407 8.66667 9.21398 9.16255 10.0934 10.042C10.9729 10.9214 11.7586 12.2023 12.5711 13.5565C13.3836 14.9106 14.2229 16.3381 15.3747 17.4899C16.5265 18.6417 18.0741 19.5 20 19.5C23.5768 19.5 26.5 16.5768 26.5 13C26.5 9.42324 23.5768 6.5 20 6.5C17.8983 6.5 16.0353 7.49624 14.8436 9.04541C15.3203 9.72791 15.7422 10.4224 16.1322 11.0724C16.8255 9.64243 18.2992 8.66667 20 8.66667C22.4054 8.66667 24.3333 10.5946 24.3333 13C24.3333 15.4054 22.4054 17.3333 20 17.3333C18.6759 17.3333 17.786 16.8374 16.9066 15.958C16.0271 15.0786 15.2414 13.7977 14.4289 12.4435C13.6164 11.0894 12.7771 9.6619 11.6253 8.51009C10.4735 7.35828 8.92593 6.5 7 6.5Z"
                fill={color}
            ></path>
        </g>
        <defs>
            <clipPath id="clip0_428_37120">
                <rect
                    width="26"
                    height="26"
                    fill="none"
                    transform="translate(0.5)"
                ></rect>
            </clipPath>
        </defs>
    </svg>
);
