import PlannerInteractive from "@/components/examples/planner-interactive";

export default function Planner() {
    return (
        <div className="max-w-xl mx-auto py-8">
            <p className="text-4xl font-bold">5C Course Planner</p>
            <div className="my-8 grid grid-cols-2 gap-4">
                <PlannerInteractive>Fall 2023</PlannerInteractive>
                <PlannerInteractive>Spring 2024</PlannerInteractive>
            </div>
        </div>
    )
}