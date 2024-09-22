const { TextField, Box, Fade, Modal } = require("@mui/material");
const { Controller } = require("react-hook-form");

const FormInfo = ({
    open,
    handleClose,
    details,
    handleFormSubmit,
    quantity,
    handleDecrement,
    handleIncrement,
    totalValue,
    setQuantity,
    handleSubmit,
    control,
}) => {
    const formHandle = (data) => {
        handleFormSubmit(data);
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseFloat(event.target.value);
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundImage: "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_960_720.jpg')",
                            opacity: 10,
                            backgroundSize: "cover",
                            backdropFilter: "blur(8px)",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h6 className="text-lg font-bold text-white">{details?.location}</h6>
                        </div>
                        <hr />
                        <form onSubmit={handleSubmit(formHandle)}>
                            <div className="w-full my-3">
                                <div className="flex justify-between gap-6">
                                    <div>
                                        <Controller
                                            name="name"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <TextField
                                                    required
                                                    hiddenLabel
                                                    variant="filled"
                                                    placeholder="Name..."
                                                    size="small"
                                                    sx={{
                                                        width: "100%",
                                                        background: "white",
                                                    }}
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <TextField
                                                    required
                                                    hiddenLabel
                                                    variant="filled"
                                                    placeholder="Your email address..."
                                                    size="small"
                                                    sx={{
                                                        width: "100%",
                                                        margin: "10px 0",
                                                        background: "white"
                                                    }}
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="address"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <TextField
                                                    required
                                                    hiddenLabel
                                                    variant="filled"
                                                    placeholder="Your address..."
                                                    size="small"
                                                    sx={{
                                                        width: "100%",
                                                        margin: "10px 0",
                                                        background: "white"
                                                    }}
                                                    {...field}
                                                />
                                            )}
                                        />
                                        <div className="flex justify-between gap-2 mt-2">
                                            <Controller
                                                required
                                                name="phone"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <TextField
                                                        hiddenLabel
                                                        variant="filled"
                                                        placeholder="Phone Number..."
                                                        size="small"
                                                        sx={{
                                                            width: "100%",
                                                            background: "white"
                                                        }}
                                                        {...field}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className="border bg-[#E8E8E8]">
                                        <div>
                                            <p className="pl-3">Adult</p>
                                            <div className="flex items-center rounded">
                                                <button
                                                    type="button"
                                                    className="w-8 h-8 text-lg leading-8 text-white transition bg-lime-600 hover:opacity-75"
                                                    onClick={handleDecrement}
                                                >
                                                    -
                                                </button>

                                                <input
                                                    type="number"
                                                    id="Quantity"
                                                    value={quantity}
                                                    className="h-8 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                    onChange={handleQuantityChange}
                                                />

                                                <button
                                                    type="button"
                                                    className="w-8 h-8 text-lg leading-8 text-white transition bg-lime-600 hover:opacity-75"
                                                    onClick={handleIncrement}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="pl-3">Child</p>
                                            <div className="flex items-center rounded">
                                                <button
                                                    type="button"
                                                    className="w-8 h-8 text-lg leading-8 text-white transition bg-lime-600 hover:opacity-75"
                                                    onClick={handleDecrement}
                                                >
                                                    -
                                                </button>

                                                <input
                                                    type="number"
                                                    id="Quantity"
                                                    value={quantity}
                                                    className="h-8 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                    onChange={handleQuantityChange}
                                                />

                                                <button
                                                    type="button"
                                                    className="w-8 h-8 text-lg leading-8 text-white transition bg-lime-600 hover:opacity-75"
                                                    onClick={handleIncrement}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <div className="w-screen max-w-lg">
                                        <dl className="text-sm text-white ">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd>{details?.amount}</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>Members</dt>
                                                <dd>* {quantity}</dd>
                                            </div>
                                            <hr className="my-3" />

                                            <div className="flex justify-between !text-base font-medium mb-3">
                                                <dt>Total</dt>
                                                <dd>{totalValue} TK</dd>
                                            </div>
                                        </dl>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="block px-5 py-3 text-sm text-gray-100 transition rounded bg-lime-700 hover:bg-lime-600"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default FormInfo;