import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    * {
        color:#484848;
        font-weight: 500;
    }
    
    .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas:
        'title title'
        'items items-price'
        'tax-delivery tax-delivery-price';

        .title{
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;

            background-color: #484848;
            color: #fff;
            padding: 15px;
            border-radius: 20px 20px 0 0;

            text-align: center;

        }
        .items{
            grid-area: items;
            padding-left: 20px;
        }
        .items-price{
            grid-area: items-price;
            padding-right: 20px;
        }
        .tax-delivery{
            grid-area: tax-delivery;
            padding-left: 20px;
        }
        .tax-delivery-price{
            grid-area: tax-delivery-price;
            padding-right: 20px;
        }
    }
    .container-bottom {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-weight: 700;
            margin-top: 24px;
            padding: 20px;

            * {
                font-weight: 700;
            }
        }







`
