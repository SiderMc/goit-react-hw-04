import css from  "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return <div className={css.error__content}>
        <h2 className={css.error__title}>Something went wrong, please try again</h2>
    </div>
}