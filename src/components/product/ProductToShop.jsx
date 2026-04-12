import { Box, CardMedia, IconButton, Rating, Tooltip, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import { Link } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductToShop({ products }) {

    // to do : make the logic for the button

    // const handleAddToCart = () => {
    //     console.log('add to cart');
    // }
    // const handleAddToWishlist = () => {
    //     console.log('add to wishlist');
    // }
    // const handleAddToCompare = () => {
    //     console.log('add to compare');
    // }

    const { mutate: addToCart } = useAddToCart();

    return (

        <Box>
            <Box>
                <Box>
                    <Box sx=
                        { {
                            position: 'relative',
                            borderRadius: "15px",
                            overflow: 'hidden',
                            width: "100%",
                            '&:hover .imageCategory': {
                                transform: "scale(1.1)",
                            },
                            '&:hover .cart-btn': {
                                opacity: 1,
                                zIndex: 1,
                                transform: 'translateY(-20px)',

                            }
                        } }
                    >
                        <CardMedia
                            className='imageCategory'
                            component="img"
                            image={ products.image }
                            alt={ products.name }
                            sx={ {
                                transition: "all 0.3s ease",
                                width: "100%",
                                hght: "100%",
                                objectFit: "contain",

                            } }
                        />

                        <Box className='cart-btn' sx={ {
                            transform: 'translateY(20px)',
                            opacity: 0,
                            width: "100%",
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'start',
                            transition: "all 0.4s ease",
                            justifyContent: 'space-evenly',
                            position: 'absolute',
                            bottom: '30%',
                            zIndex: -1,
                        } }>
                            <Tooltip title="Add To Cart">

                                <IconButton onClick={ () => addToCart({ ProductId: products.id, Count: 1 }) } sx={ {
                                    backgroundColor: "background.default",
                                    borderRadius: "50%",
                                    p: 1,
                                    '&:hover': {
                                        backgroundColor: "primary.main",
                                    }
                                } }>
                                    <ShoppingCartOutlinedIcon />
                                </IconButton>

                            </Tooltip>

                            <Tooltip title="View Product">
                                <Link to={ `product/${products.id}` }
                                >
                                    <IconButton
                                        sx={ {
                                            backgroundColor: "background.default",
                                            borderRadius: "50%",
                                            p: 1,
                                            '&:hover': {
                                                backgroundColor: "primary.main",
                                            }
                                        } }
                                    >
                                        <SearchOutlinedIcon />
                                    </IconButton>
                                </Link>
                            </Tooltip>

                            <Tooltip title="Add To Wishlist">
                                <IconButton sx={ {
                                    backgroundColor: "background.default",
                                    borderRadius: "50%",
                                    p: 1,
                                    '&:hover': {
                                        backgroundColor: "primary.main",

                                    }
                                } }>
                                    <FavoriteBorderOutlinedIcon />
                                </IconButton>
                            </Tooltip>

                        </Box>


                    </Box>

                    <Box sx={ {
                        mt: 2
                    } }>
                        <Box>
                            <Rating value={ products.rate } readOnly />
                        </Box>
                        <Typography variant='h6' component='h3' fontWeight={ 800 } color='text.primary'>{ products.name }</Typography>
                        <Typography variant='body1' color='text.primary' fontWeight={ 800 }>{ products.price }$</Typography>
                    </Box>

                </Box>


            </Box>

        </Box>


    )
}
