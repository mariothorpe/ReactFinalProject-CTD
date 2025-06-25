function CoasterForm() {
    return (
        <form>
            <label htmlFor="coasterName"> Coaster:  </label>
            <input type="text" id="coasterName" />
            <button type="submit"> Search </button>
        </form>
    )
}

export default CoasterForm;