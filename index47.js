// Write  a js program to ge the current date
// Expected Output : 
// dd/mm/yyyy



const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());