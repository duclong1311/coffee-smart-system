'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { MdOutlineFeedback } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const ModalFeedback = ({ showModal, setShowModal }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const onSubmit = async (data) => {
        try {
            if (data) {
                await axios.post("http://localhost:3000/feedBack", {
                    feedbackDate: new Date().toLocaleDateString(),
                    createdBy: data.name,
                    emai: data.email,
                    feedback: data.feedback,
                });
                toast.success("Phản hồi của bạn đã được gửi!");
                handleCloseModal();
                reset();
            }
        }
        catch (e) {
            toast.e("Không thể gửi phản hồi");
        }
    };

    return (
        <Dialog open={showModal} onClose={handleCloseModal} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 x-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:size-10">
                                    <MdOutlineFeedback aria-hidden="true" className="size-6 text-sky-400" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        Phản hồi khách hàng
                                    </DialogTitle>
                                    <form
                                        className="p-4 md:p-5"
                                        onSubmit={() => handleSubmit()}
                                    >
                                        <div className="grid gap-4 mb-4 grid-cols-1">
                                            <div className="col-span-2">
                                                <label htmlFor="name" className="inline-block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Họ tên khách hàng
                                                </label>
                                                <input
                                                    {...register('name')}
                                                    type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 inline-block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Trần Văn A" required=""
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Email khách hàng
                                                </label>
                                                <input
                                                    {...register('email', {
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                            message: "Địa chỉ email không hợp lệ.",
                                                        }
                                                    })}
                                                    type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="tran@vana.com" required=""
                                                />
                                                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                                            </div>

                                            <div className="col-span-2">
                                                <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phản hồi khách hàng</label>
                                                <textarea
                                                    {...register("feedback", {
                                                        required: "Phản hồi là bắt buộc.",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Phản hồi phải có ít nhất 10 ký tự.",
                                                        },
                                                    })}
                                                    rows="4"
                                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Phản hồi về sản phẩm, chất lượng dịch vụ, nhân viên,...">
                                                </textarea>
                                                {errors.feedback && <span style={{ color: "red" }}>{errors.feedback.message}</span>}
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 sm:ml-3 sm:w-auto"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Gửi phản hồi
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setShowModal(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Hủy bỏ
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalFeedback;

