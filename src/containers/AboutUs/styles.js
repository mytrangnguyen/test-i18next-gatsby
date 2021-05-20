import styled from 'styled-components';

export const AboutUsWrapper = styled.div`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: ${({ theme }) => theme.text.mailL2};

    .about-us {
        &-title {
            font-weight: bold;
            font-size: 30px;
            line-height: 37px;
            color: ${({ theme }) => theme.text.mailL0};
        }

        &-subtitle {
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            color: ${({ theme }) => theme.text.mailL0};
            margin-top: 20px;
        }

        &-list {
            list-style-type: none;
            margin-top: 30px;
            padding-left: 0;

            li {
                & + li {
                    margin-top: 20px;
                }

                font-size: 16px;
                line-height: 22px;
                color: ${({ theme }) => theme.text.mailL0};

                .anticon {
                    color: ${({ theme }) => theme.palette.primary};
                    margin-right: 20px;
                }
            }
        }
    }
`