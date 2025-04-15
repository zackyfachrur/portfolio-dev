import Form from "@/components/Form";

export default function Hero() {
  return (
    <section className="h-[100vh] -mb-72 flex justify-center items-center bg-[url('@/assets/img/hero-pattern.png')]">
      <div className="containers flex justify-between items-center gap-12">
        <div className="w-[60%]">
          <h2 className="font-title text-6xl max-2xl:text-5xl">Do you have any project ?</h2>
          <p className="text-2xl max-2xl:text-lg font-semibold">
            Fill out the form on the right side for discussion
          </p>
        </div>

        <div className="px-1 py-1 rounded-2xl w-[40%] bg-white animate-bg-card">
          <Form />
        </div>
      </div>
    </section>
  );
}
