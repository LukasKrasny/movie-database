const Footer = () => {
  return (
    <footer className="bg-scarabeus-sacer/50 border-t border-tawny-olive/50 p-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-center text-lg font-medium text-tawny-olive">
          &copy; {new Date().getFullYear()} Lukáš Krásný - MovieDB. Všechna práva vyhrazena.
        </p>
        <p className="text-center text-tawny-olive">
          Data poskytována přes TMDB API. Tento projekt slouží pro výukové
          účely.
        </p>
      </div>
    </footer>
  )
}

export default Footer