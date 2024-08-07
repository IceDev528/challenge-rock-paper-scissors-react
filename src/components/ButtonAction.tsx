import { toast } from "react-toastify";
import { useGameStore } from "@/store";
import { GameChoice, GameState } from "@/enums";

export default function ButtonAction() {
    const {
        isGameFinished,
        bets,
        choiceComputerBet,
        gameState,
        setGameState,
        finishGame,
        toggleBetOutComeVisibility
    } = useGameStore();
    const hasSelectedBet: boolean = bets.length > 0;
    const isGamePending: boolean = gameState === GameState.Pending;
    const buttonClassName: string = `${isGamePending ? "text-burly-wood/25 bg-cod-gray/25 border-burly-wood/25" : "text-burly-wood bg-cod-gray border-burly-wood"} w-20 h-8 md:w-30 md:h-12 lg:w-40 lg:h-16 border-2 border-solid rounded-[2rem] hover:shadow-[0px_0px_4px] hover:shadow-burly-wood transition-all duration-300`;
    const buttonText: string = isGameFinished && !isGamePending ? "Clear" : "Play";

    const handleComputerBet = () => {
        const choiceCount: number = Object.keys(GameChoice).length;
        const selectedRandomChoiceIndex: number = Math.floor(Math.random() * choiceCount);
        const computerChoice: GameChoice = Object.values(GameChoice)[selectedRandomChoiceIndex];
        choiceComputerBet(computerChoice);
    }


    const onClick = (): void => {
        if (gameState == GameState.Pending) return;

        if (!hasSelectedBet) {
            toast.info("Ready to play? Please place at least one bet to start the game. Good luck!");
            return
        }

        setGameState(GameState.Pending);
        toggleBetOutComeVisibility()

        if (!isGameFinished) {
            finishGame();
            handleComputerBet();
        }
    }

    return (
        <button type="button"
            onClick={onClick}
            className={buttonClassName}>
            <span className="uppercase text-base md:text-lg lg:text-xl font-bold">{buttonText}</span>
        </button>
    )
}