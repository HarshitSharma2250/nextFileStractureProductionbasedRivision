import Chart from "@/components/chart/page";
import Matrix from "@/components/matrix/page";



export default function Dahsboard(){


return (
    <div className="flex justify-between">
<section>
    <Matrix/>
</section>
<section>
    < Chart/>
</section>
    </div>
)

}