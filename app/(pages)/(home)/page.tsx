import InfoCard from "./InfoCard"
import icon1 from "@/assets/images/icon-1.png"
import icon2 from "@/assets/images/icon-2.png"
import icon3 from "@/assets/images/icon-3.png"

const Home = () => {
  return (
    <div>
      <h1 className="font-semibold text-3xl"> Dashboard</h1>

      <section className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <InfoCard icon={icon1} label="Toplam Kullanıcı" value={43343} />
        <InfoCard icon={icon2} label="Toplam Sipariş" value={43453} />
        <InfoCard icon={icon3} label="Toplam Satış" value={45555} />
        <InfoCard icon={icon3} label="Toplam Satış" value={45565} />

      </section>
    </div>
  )
}

export default Home