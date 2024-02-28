import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "1800px", minHeight: "350px", marginBottom: "70px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "600px", marginLeft: "45px", marginBottom: "65px", marginTop: "40px" }}>
                        <Card.Text style={{ fontSize: "2.75em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="Enter your address" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    )
}
