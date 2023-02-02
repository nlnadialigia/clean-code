export function Footer() {
  const currentYear = new Date().getFullYear()

  return ( 
    <footer>
      Copyright &copy; Nádia Ligia {currentYear}
    </footer>
  );
}